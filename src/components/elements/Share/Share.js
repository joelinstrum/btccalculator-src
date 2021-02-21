import { TwitterShareButton, TwitterIcon } from "react-share"

const Share = () => {

  return (
    <div className="blurb margin-top-30">
        <TwitterShareButton 
          title="Crypto ROI calculator"
          via="JoeL42737181"
          hashtags={["Cryptocurrency", "Bitcoin", "Ethereum"]}
          url="https://bitcoinprojection.com"
        ><TwitterIcon size={32} round={true} /></TwitterShareButton>
        <br />
      </div>
  )
}

export default Share;