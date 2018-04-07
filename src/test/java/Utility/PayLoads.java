package Utility;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class PayLoads {
    public String list() throws IOException {
        String payloadList = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\list.json")));
        return payloadList;
    }

    public String folder() throws IOException {
        String payloadfolder = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\folders.json")));
        return payloadfolder;
    }

    public String comments() throws IOException {
        String payloadcomm = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\comments.json")));
        return payloadcomm;
    }

    public String badlist() throws IOException {
        String list400 = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\400lists.json")));
        return list400;
    }

    public String badMemberData() throws IOException {
        String badMember = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\400membership.json")));
        return badMember;
    }

    public String badUploadData() throws IOException {
        String badUpload = new String(Files.readAllBytes(Paths.get("C:\\GitClones\\BuildIT\\src\\test\\resources\\400upload.json")));
        return badUpload;
    }
}