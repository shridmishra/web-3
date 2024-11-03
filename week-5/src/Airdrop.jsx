import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop () {

    const wallet = useWallet();
    const {connection } = useConnection();



    async function requestAirdrop(){

        let amount = document.getElementById("amount").value
        
        await connection.requestAirdrop(wallet.publicKey , amount * LAMPORTS_PER_SOL)
        alert("Airdrop"+ amount + "SOL to"+ wallet.publicKey )
    
    }


    return  <div>
        <input id="amount" type="text" />
        <button onClick={requestAirdrop}>Send Now</button>
    </div>
}