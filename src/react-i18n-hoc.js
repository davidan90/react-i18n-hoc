import { Component } from 'react';
import { object, string } from 'prop-types';

export const I18N = ({i18n, lang}) => (ComposeComponent) => {
    class I18NWrapper extends Component {
        static state = {
            i18n,
            lang,
            isChangingLang: false,
        };

        static propTypes = {
            i18n: object.isRequired,
            lang: string,
        }

        static defaultProps = {
            i18n: {},
            lang,
        }

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const lang = this.props.lang || this._getBrowserLang();
            const i18n = this._selectI18N();
            this.setState({
                lang,
                i18n,
            });
        }

        _getBrowserLang() {
            this.setState({isChangingLang: true});
            return window.navigator.language;
        }

        _selectI18N() {
            return i18n[this.props.lang] || {};
        }

        componentDidMount() {
            this.setState({isChangingLang: false});
        }
        
        render() {
            return (
                <ComposeComponent {...this.props} {...this.state}/>
            );
        }
    }
    return I18NWrapper;
}