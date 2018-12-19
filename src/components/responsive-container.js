import React from 'react';
import PropTypes from 'prop-types';
import DesktopMenubar from './desktop-menubar';
import MobileMenubar from './mobile-menubar';
import TabletMenubar from './tablet-menubar';

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopMenubar>{children}</DesktopMenubar>
        <MobileMenubar>{children}</MobileMenubar>
        <TabletMenubar>{children}</TabletMenubar>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainer;