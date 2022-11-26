const SolarWeb = () => {
    const solarWeb = 'https://www.solarweb.com/PvSystems/PvSystem?pvSystemId=ee4405ed-7be2-4409-9b13-762a13136788'

    window.open(solarWeb, '_blank');
    return <div style={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Solar web is open in a new tab</div>;
}

export default SolarWeb