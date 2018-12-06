import React from 'react';

/**
 * Пример функционального компонента.
 */
const Timer = (props) => {
    return <span>Сейчас значение таймера равно: {props.value}</span>;
}

export {Timer};