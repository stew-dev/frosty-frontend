const Home = () => {

    return (
        <div>
            <header className="App-header">
                <iframe title={'fronius'} style={{height: '100vh', width: '100%', border: 'none'}} src={"http://192.168.5.100/#/dashboard"}/>
            </header>
        </div>
    )
}

export default Home