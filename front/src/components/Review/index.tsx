import "./styles.css"

type Props = {
  name: string;
  text: string;
}

const Review = ({ name, text} : Props) => {
  return(
    <div className="review-component">
    <div className="info-container">     
      <img src="https://s3-alpha-sig.figma.com/img/fef4/0e54/63e9e788f5a0225a295d02d066afd3ea?Expires=1631491200&Signature=bzXgy0iDquss~iUrLTGKh3wCEw4F2U1DdoD1y2tAhu18In1LTjGe20hzB5oWidNzzkn~1~G1w6V0UB1bWm3ophfnM94mbOh5VTICqeUmuP5Lzoc0nd5NICWzYatscanOO0zXi56yttbVTLSe6y6CzcQMhJu1nHsWsV4QO74yqHkr~1Cz5PaeHmzVoVcsK1jQt8FJCeyCWD5cUhnOV1eDSrYNQlw2yeQHMpn~doMpwx3NUkvraQmIQ9GlHUp7PwPXrMMc-XYxAqKcwC7px1GRBV7jD1ePtXCtfsC2oxqiMoxajuG8LHsu7ItRl11ha7e7HmTp-JbTVqxkzbKIGbhPUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="estrela"></img>
      <span>{name}</span>
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review; 