import * as React from 'react';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

    }
    render() { 
        return ( <>
            <h1>Nacionalni parkovi</h1>
            <div>
                Početna stranica
            </div>
        </>  );
    }
}
 
export default Home;