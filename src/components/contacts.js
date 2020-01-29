import React from 'react'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h2>Contact List</h2></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <table >
                            <tr align="left"> <th>User Name : </th> <td>{contact.username} </td> </tr>
                            <tr align="left"> <th>User ID : </th> <td>{contact.id} </td></tr>
                            <tr align="left"> <th>Mobile : </th> <td>{contact.mobile} </td></tr>
                            <tr align="left"> <th>Email ID : </th> <td>{contact.email} </td></tr>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts