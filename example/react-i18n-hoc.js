import { Component } from 'react';
import { object, string } from 'prop-types';

export const I18N = ({i18n, lang}) => (ComposeComponent) => {
    class I18NWrapper extends Comment {
        static state = {
            isChangingLang: false,
        };

        static propTypes = {
            i18n: object.isRequired,
            lang: string,
        }

        static defaultProps = {
            i18n: {},
            lang: undefined,
        }

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const language = lang || this._getBrowserLang();
            this.props.lang = language;
            this._selectI18N();
        }

        _getBrowserLang() {
            this.setState({isChangingLang: true});
            return window.navigator.language;
        }

        _selectI18N() {
            this.props.i18n = i18n[this.props.lang] || {};
        }

        _componentDidMount() {
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