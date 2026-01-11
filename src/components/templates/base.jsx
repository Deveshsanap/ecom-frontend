import { Outlet } from "react-router";
import Titlebar from "../titlebar";
import Footer from "../footer";

const BaseTemplate = () => {
    return (
        <>
            <Titlebar />
            <div style={{minHeight:"85vh"}}>
            <Outlet />
            </div>
            <Footer />
        </>);
}

export default BaseTemplate;