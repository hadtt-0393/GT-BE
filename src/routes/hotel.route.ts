import { Router } from "express";
import HotelController from "../controller/hotel.controller";
import middlewareToken from "../middleware/verifyToken";
const route = Router();

route.get("/getAllHotel", HotelController.getAllHotel);         //lay ra toan bo hotel isActive
route.get("/count", HotelController.getHotelsByCity);           // lay ra hotel by city
route.get("/topTenRating", HotelController.getTopTenRating);    // lay ra top10 hotel by Rating
route.get("/topTenNewest", HotelController.getTopTenNewest);    // lay ra top10 hotel theo thoi gian tao
route.get("/get-detail", middlewareToken.verifyToken as any, middlewareToken.verifyStaff as any, HotelController.getDetailhotelV2 as any);  //lay ra detail hotel voi quyen cua staff
route.put('/get-detail', middlewareToken.verifyToken as any, middlewareToken.verifyStaff as any, HotelController.updateHotel as any); //
route.get("/:id", HotelController.getDetailHotel)               // lay ra detail cua hotel

export default route;
