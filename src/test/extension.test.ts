import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Test Suite", () => {
  test("should be present", () => {
    assert.ok(vscode.extensions.getExtension("Azganoth.pixel-icons"));
  });
});
