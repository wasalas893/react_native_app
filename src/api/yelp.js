import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        authorization:'Bearer vXyESP6OODLpM1R_xSSTdcenQ6ou17KKmJ5Ry5p7Z2DeK_OhT5V3WMn3R-i5JPU4zbNmsbfHk8K0VvZcGpoGZNDm6yc3alFkFB6X9M2AXEFSVy17HEYVyUwbmv8WXnYx'
    }
});