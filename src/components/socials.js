import Styles from '../app/page.module.css'
import Image from 'next/image'
import Twitter from '../media/twitter.svg'
import Bluesky from '../media/bluesky.svg'
import Github from '../media/github.svg'
import Threads from '../media/threads.svg'
import Signal from '../media/signal.svg'

export default function Socials() {
    return (
        <div style={{ padding:70 }} className="container">
            <h2 className="lemon">LET'S CONNECT</h2>
            <div className="hocontainer">
                <a className={Styles.socialicon} href='https://twitter.com/knotbin' target='_blank'><Image src={Twitter} width={55} height={55}></Image></a>
                <a className={Styles.socialicon} href='https://bsky.app/profile/knotbin.xyz' target='_blank'><Image src={Bluesky} width={55} height={55}></Image></a>
                <a className={Styles.blacksocial} href='https://github.com/knotbin' target='_blank'><Image src={Github} width={55} height={55}></Image></a>
                <a className={Styles.blacksocial} href='https://threads.net/@knotbin' target='_blank'><Image src={Threads} width={55} height={55}></Image></a>
                <a className={Styles.socialicon} href='https://signal.me/#eu/6dL59nT5AXrfuctsT4IT81iP5SPvaYbz_glV5XaTtaKDfuDcwOREKa02KyPVgk6Y' target='_blank'><Image src={Signal} width={55} height={55}></Image></a>
            </div>
        </div>
    )
}