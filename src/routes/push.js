const { Router } = require('express')
const Telegraf = require('telegraf').Telegraf
const timestamp = require('time-stamp')
const { exec } = require("child_process")

const router = Router();
const ip_nodemcu = "::ffff:"+process.env.NODEMCU_IP || "::ffff:127.0.0.1";

const bot = new Telegraf(process.env.TELEGRAM_NDTOKEN)
bot.launch()

router.get('/push', (req, res) => {
    if(ip_nodemcu === req.ip) {
        console.log("Accepted request from NodeMCU "+req.ip);
        res.send("ok");
        bot.telegram.sendMessage(process.env.CHANNEL_ID,'Button pressed on '+timestamp('YYYY/MM/DD HH:mm:ss'))
        exec("python buzz.py", (err, stdout, stderr) => {
            if (err) {
                bot.telegram.sendMessage(process.env.CHANNEL_ID,'Buzzer alert failed');
            }
            if (stdout) {
                bot.telegram.sendMessage(process.env.CHANNEL_ID, stdout);
            }
        });
    } else {
        console.log("Denied request from " + req.ip);
        res.redirect('/');
    }
});

router.get('*', (req, res) => {
    res.redirect("/")
});

router.post('*', (req, res) => {
    res.redirect("/")
});

router.put('*', (req, res) => {
    res.redirect("/")
});

router.delete('*', (req, res) => {
    res.redirect("/")
});

module.exports = router;
