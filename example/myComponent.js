import { Component } from 'react';
import { I18N } from './react-i18n-hoc';

const lang = 'es';
const i18n = {
    es: {
        title: 'Prueba',
        text: 'Esto es una prueba.'
    },
    en: {
        title: 'Example',
        text: 'This is an example'
    },
}

@I18N({i18n, lang})
export default class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.i18n.title}</h1>
                <p>{this.props.i18n.text}</p>
            </div>
        );
    }
}
