/**
 * 基本空白布局，所有布局基于此布局
 */
import React from 'react';
const BlankLayout: React.FC = props => {
    return (
        <>{props.children}</>
    );
};
export default BlankLayout;
