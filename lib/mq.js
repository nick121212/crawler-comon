import amqplib from "amqplib";
import _ from "lodash";

let connection;

export class FxMq {

    constructor() {}

    async init(config) {
        let connectionStr = `amqp://${config.user}:${config.password}@${config.host}`;

        if (!connection) {
            connection = await amqplib.connect(connectionStr);
        }
    }

    async getQueue(config) {
        let channel = await connection.createChannel();
        let q = await channel.assertQueue(config.name, _.extend({
            durable: true,
            exclusive: false,
            autoDelete: false
        }, config.setting));

        return {
            ch: channel,
            q: q
        };
    }
}

export default async(config) => {
    let q = new FxMq();

    await q.init(config);

    return q;
};