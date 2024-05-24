import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      require: true,
    },
    hotline: {
      type: String,
      require: true,
    },
    images: {
      type: [String],
      require: true,
    },
    cheapestPrice: {
      type: Number,
      require: true,
    },
    highestPrice: {
      type: Number,
      require: true,
    },
    city: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      default: null,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    ratingAvg: {
      type: Number,
      min: 0,
      max: 5,
      require: true,
    },
    discount: {
      type: Number,
      require: true,
      default: 0,
    },
    rooms: {
      type: [String],
      require: true,
    },
    services: {
      type: [String],
      require: true,
    },
    comments: {
      type: [],
      default: [],
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false
    }

  },
  { timestamps: true },
);

export default mongoose.model('hotel', HotelSchema);
