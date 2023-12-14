import { $, $$, Component } from '@qavajs/po-playwright';

export default class ChartIQApp {
    TickerSearch = $('[role="navigation"] cq-lookup-input input');
    TickerSearchResults = $$('cq-item[role=menuitem]');
    Ticket = $('cq-symbol');
}

