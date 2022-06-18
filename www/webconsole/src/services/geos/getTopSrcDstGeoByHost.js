import { UtlHttpRequest } from '../utils';


export const GetTopGeoByHost = ({
    host = 'uknown',
    top = 15,
    direction = 'src',
    interval = '24m',

    signal
}) => {
    // AIP URL
    const url = `${process.env.REACT_APP_HTTP}/geo/report/${host}/as/${direction}/top/${top}/interval/${interval}`;

    // send request to server
    return UtlHttpRequest(
        url,
        'GET',
        false,
        false,
        false,
        signal
    );
};