// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('dashboard', () => {
    it('render display and controls', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});