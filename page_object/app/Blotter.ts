import { $, $$, Component } from '@qavajs/po-playwright';

export default class BlotterApp {
    Search = $('#quick-filter-box');
    Companies = $$(new Company('.ag-row'));
}

class Company extends Component {
    ViewChart = $('button:has-text("View chart")')
}

