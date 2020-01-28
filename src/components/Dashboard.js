
class Dashboard extends Component {
    state = {
        redirect: true,
        contacts: []
    }
    setRedirect = () => {
        this.setState({
            redirect: false
        })
    }
    renderRedirect = () => {
        if (this.state.redirect === false) {
            return <Redirect to='/' />
        }
    }
    render() {
        return (
       
        <div ><center>
            <h1>Welcome to React App</h1></center><br />
            {this.renderRedirect()}
            <Contacts contacts={this.state.contacts} /><br/> <br/>
            <button onClick={this.setRedirect}>Logout</button>
        </div>)
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}
export default Dashboard;
