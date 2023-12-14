import { $, $$, Component } from '@qavajs/po-playwright';
import BlotterApp from './app/Blotter';
import ChartIQApp from './app/ChartIQ';

export default class App {
    Toolbar = $(new Toolbar());
    AppLauncher = $(new AppLauncher());
    ChartIQApp = $(new ChartIQApp());
    BlotterApp = $(new BlotterApp());
    Resolver = $(new Resolver());
    Workspaces = $(new Workspaces());
}


class Toolbar {
    AppsMenu = $('#AppLauncherMenu-menu-toggle');
}

class AppLauncher {
    Apps = $$('.menu-item-row');
}

class Resolver {
    Apps = $$('.app-list li');
}

class Workspaces {
    DefaultWorkspace = $$('[title="Default Workspace"]');
}
