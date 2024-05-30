import { Form, redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./SettingsPage.css"

const SettingsPage = () => {
    return(
        <>
            <Navbar />
            <Form method="post" action="/:team/settings" id="teamForm">
                <label>
                    <span>Team Name</span>
                    <input type="text" name="name"></input>
                </label>
                <label>
                    <span>Members</span>
                    <input type="email"></input>
                    <input type="email"></input>
                    <input type="email"></input>
                    <input type="email"></input>
                    <input type="email"></input>
                    <div id="addMember">
                        <button type="button">+</button>
                        <p>Add member</p>
                    </div>
                </label>
                <button type="submit">Save Changes</button>
            </Form>
        </>
    )
}
export default SettingsPage;

export const submitAction = async ({request}) => {
    const data = await request.formData()

    const submission = {
        name: data.get('name'),
        members: data.get('members')
    }

    console.log(submission)

    return redirect('/')
}