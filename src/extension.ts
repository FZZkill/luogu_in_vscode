import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "luogu" is now active!');
	let disposable = vscode.commands.registerCommand('luogu.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World VSCode!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
