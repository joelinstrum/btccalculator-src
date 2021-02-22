import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

const Share = () => {
  const url = "https://bitcoinprojection.com";
  const title = "Crypto ROI profit calculator";
  const description =
    "Easily calculate profit in real-time or create what-if scenarios for your crypto ivestment";
  const size = 32;

  return (
    <div className="blurb margin-top-30 flex-row-all">
      <div className="margin-right-10">
        <TwitterShareButton
          title={title}
          via="JoeL42737181"
          hashtags={["Cryptocurrency", "Bitcoin", "Ethereum"]}
          url={url}
        >
          <TwitterIcon size={size} round={true} />
        </TwitterShareButton>
      </div>
      <div className="margin-right-10">
        <FacebookShareButton title={title} description={description} url={url}>
          <FacebookIcon size={size} />
        </FacebookShareButton>
      </div>
      <div className="margin-right-10">
        <LinkedinShareButton
          title={title}
          description={description}
          source={url}
          url={url}
        >
          <LinkedinIcon size={size} />
        </LinkedinShareButton>
      </div>
      <div className="margin-right-10">
        <RedditShareButton
          title={title}
          description={description}
          source={url}
          url={url}
        >
          <RedditIcon size={size} />
        </RedditShareButton>
      </div>
    </div>
  );
};

export default Share;
