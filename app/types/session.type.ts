import type { ToolExecutionEndEvent, UIMessage } from "ai";
import type { BaseDocument } from "./model.type.js";
import type { SourceType } from "./new-source.type.js";

interface Session extends BaseDocument {
        _id: string;
        name: string;
        icon: string;
        createdBy: string;
        messages: UIMessage[],
        updatedAt: string;
        createdAt: string;
}

interface NewSessionPayload {
        type: SourceType;
        fileId?: string;
        url?: string;
        text?: string

};


interface AskQuestionPaylod {
        message: UIMessage,
        sessionId: string,
        onToolExecutionEnd?: (tool: ToolExecutionEndEvent) => void
}



type ArtifactMsgMetaData = {
        _id?: string;
        type?: string;
        title?: string;
};

type ArtifactToolResponse = {
        artifactId?: string;
        artifactType?: string;
        title?: string;
};

type MessageMetaData = {
        artifacts: ArtifactMsgMetaData[]
}

type SessionUIMessage = UIMessage<MessageMetaData>;

export type { Session, NewSessionPayload, AskQuestionPaylod, SessionUIMessage, ArtifactToolResponse, ArtifactMsgMetaData }