import { useContext } from 'react';
import { DataContext } from './Data'

function Second() {
    const context = useContext(DataContext);
    return <div>{context.text} --- {context.text} --- {context.text}</div>;
}

export default Second;