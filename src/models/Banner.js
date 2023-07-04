const mongoose=require("mongoose");

const Banner = mongoose.Schema([
  {
    bannerHeading: String,
    bannerPara: String,
    bannerButton: String,
    bannerImg: String
  }
]);

module.exports=mongoose.model("banner", Banner);