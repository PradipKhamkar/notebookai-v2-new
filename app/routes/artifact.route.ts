import { Router } from "express";
import artifactController from "../controller/artifact.controller.js";
import { authGurd } from "../middleware/authGurd.js";

const route = Router();

route.get('/', artifactController.getUserArtifact);
route.post('/get-artifacts', artifactController.getArtifacts);
route.delete('/:artifactId', artifactController.deleteArtifact);
route.patch('/:artifactId', artifactController.renameArtifactName);

export default route;