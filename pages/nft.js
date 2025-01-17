/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'

import 'sf-font'
import axios from 'axios'
import VAULTABI from './VAULTABI.json'
import { NFTCONTRACT, STAKINGCONTRACT, moralisapi, nftpng } from '../components/config'
import Web3 from 'web3'

let web3 = null
let account = null
let vaultcontract = null

const moralisapikey = 'zglKCYyqp658UwQbzpIjUjspQJznpktmDX6P0HqjblHsNQS71wrveTF90RYgFNk0'

export default function Nft () {
  const [apicall, getNfts] = useState([])
  const [nftstk, getStk] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    callApi()
  }, [])

  async function callApi () {
    // eslint-disable-next-line no-undef
    const provider = await web3Modal.connect()
    web3 = new Web3(provider)
    await provider.send('eth_requestAccounts')
    const accounts = await web3.eth.getAccounts()
    account = accounts[0]
    vaultcontract = new web3.eth.Contract(VAULTABI, STAKINGCONTRACT)
    const config = { 'X-API-Key': moralisapikey, accept: 'application/json' }
    const nfts = await axios.get((moralisapi + `nft/${NFTCONTRACT}/owners?chain=bsc%20testnet&format=decimal`), { headers: config })
      .then(output => {
        const { result } = output.data
        return result
      })
    const apicall = await Promise.all(nfts.map(async i => {
      const item = {
        tokenId: i.token_id,
        holder: i.owner_of,
        wallet: account
      }
      return item
    }))
    const stakednfts = await vaultcontract.methods.tokensOfOwner(account).call()
      .then(id => {
        return id
      })
    const nftstk = await Promise.all(stakednfts.map(async i => {
      const stkid = {
        tokenId: i
      }
      return stkid
    }))
    getNfts(apicall)
    getStk(nftstk)
    console.log(apicall)
    setLoadingState('loaded')
  }
  if (loadingState === 'loaded' && !apicall.length) {
    return (
          <h1 className="text-3xl">Wallet Not Connected</h1>)
  }
  return (
        <div className='nftportal mb-4'>
            <div className="container col-lg-11">
              <div className="row items px-3 pt-3">
                <div className="ml-3 mr-3" style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(4, 5fr)', columnGap: '20px' }}>
                  {apicall.map((nft, i) => {
                    const owner = nft.wallet.toLowerCase()
                    if (owner.indexOf(nft.holder) !== -1) {
                      async function stakeit () {
                        vaultcontract.methods.stake([nft.tokenId]).send({ from: account })
                      }
                      return (
                      <div className="card nft-card mt-3 mb-3" key={i} >
                        <div className="image-over">
                          <img className="card-img-top" src={nftpng + nft.tokenId + '.png'} alt="" />
                        </div>
                        <div className="card-caption col-12 p-0">
                          <div className="card-body">
                            <h5 className="mb-0">Net2Dev Collection NFT #{nft.tokenId}</h5>
                            <h5 className="mb-0 mt-2">Status<p style={{ color: '#39FF14', fontWeight: 'bold', textShadow: '1px 1px 2px #000000' }}>Ready to Stake</p></h5>
                            <div className="card-bottom d-flex justify-content-between">
                              <input key={i} type="hidden" id='stakeid' value={nft.tokenId} />
                              <Button style={{ marginLeft: '2px', backgroundColor: '#ffffff10' }} onClick={stakeit}>Stake it</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }
                  })}
                    {nftstk.map((nft, i) => {
                      async function unstakeit () {
                        vaultcontract.methods.unstake([nft.tokenId]).send({ from: account })
                      }
                      return (
                        <div>

                        <div className="card stakedcard mt-3 mb-3" key={i} >
                          <div className="image-over">
                          <img style={{ position: 'absolute', top: '0.05rem', width: '90px' }} src='stakeicon.png'></img>
                            <img className="card-img-top" src={nftpng + nft.tokenId + '.png'} alt="" />
                          </div>
                          <div className="card-caption col-12 p-0">
                            <div className="card-body">
                              <h5 className="mb-0">Net2Dev Collection NFT #{nft.tokenId}</h5>
                              <h5 className="mb-0 mt-2">Status<p style={{ color: '#15F4EE', fontWeight: 'bold', textShadow: '1px 1px 2px #000000' }}>Currently Staked</p></h5>
                              <div className="card-bottom d-flex justify-content-between">
                                <input key={i} type="hidden" id='stakeid' value={nft.tokenId} />
                                <Button style={{ marginLeft: '2px', backgroundColor: '#ffffff10' }} onClick={unstakeit}>Unstake it</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
            </div>
  )
}
