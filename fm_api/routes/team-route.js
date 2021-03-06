import express from "express";

import isAuth from "../middlewares/verifyToken.js";
import TeamController from "../controllers/team-controller.js";

import uploadFile from "../functions/upload-file.js";

const teamController = new TeamController();
const route = express.Router();

route.get("/list/:keyword?", teamController.listTeam);
// route.post("/list", isAuth, teamController.listTeamOfUser);
route.put("/create", isAuth, teamController.create);
route.put("/edit/:teamId", isAuth, teamController.edit);
route.get("/view-team/:teamId", teamController.viewTeam);
route.post("/create-member/:teamId", isAuth, teamController.createMember);
route.get("/view-member/:memberId", teamController.viewMember);
route.post(
	"/image/:teamId",
	isAuth,
	uploadFile.single("logo"),
	teamController.uploadImage
);
route.post(
	"/image",
	isAuth,
	uploadFile.single("logo"),
	teamController.uploadImageForNewteam
);
route.put(
	"/update-member/:teamId/:memberId",
	isAuth,
	teamController.updateMember
);
route.delete(
	"/delete-member/:teamId/:memberId",
	isAuth,
	teamController.deleteMember
);
route.put("/add-opponent", isAuth, teamController.addOpponent);
route.post("/accept-opponent/:notiId", isAuth, teamController.acceptOpponent);
route.post("/update-match/:matchId", isAuth, teamController.updateMatch);
route.get("/comment-list/:teamId", teamController.getCommentList);
route.get("/is-captain/:teamId", isAuth, teamController.checkCaptain);

export default route;
