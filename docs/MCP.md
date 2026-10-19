# Stitch MCP Connection

Author: Hiba Hussieni

## 1. Host, Client, and Server

- Host: Visual Studio Code with GitHub Copilot Chat.
- Client: VS Code's MCP client.
- Server: Google's remote Stitch MCP server.
- Server URL: https://stitch.googleapis.com/mcp

MCP was used during development to retrieve design context.
The final dashboard does not require an MCP connection.

## 2. Configuration

The server was configured in VS Code's user configuration,
outside the project repository.

Authentication uses the X-Goog-Api-Key header with a password-style
input prompt. No API key is included in this document.
Credentials must remain outside project files and screenshots.

## 3. Connection Result

The VS Code server log reported:
- Connection state: Running
- Discovered 15 tools

Actual tool calls were then used to verify access.

## 4. Successful Project Listing

Tool displayed: list_projects — stitch (MCP Server)

Request:
List available projects and find Asta's Preparation Dashboard.

Actual result:
The response included:
- Project: projects/18117374557661371440
- Title: Asta's Preparation Dashboard
- Visibility: PRIVATE
- Screen instances associated with the project

This confirmed that the client received project data from Stitch.

## 5. Successful Screen Retrieval

Tool reported by the coding agent: mcp_statelessserv_get_screen

Requested screen:
projects/18117374557661371440/screens/b9a9d763f14448cc8cba13a76006d673

Actual result reported by the agent:
- Title: Asta's Preparation Dashboard - Desktop
- Device type: DESKTOP
- Dimensions: 2560 × 2344
- HTML and screenshot download URLs were returned

No designs were generated or edited by these read operations.

## 6. HTML Content Verification

After retrieving the screen details through MCP, the coding agent
successfully downloaded the returned HTML.

The fetched content contained neither:
- "UI State Specification Reference"
- "Specification Sample"

It included the three required training tasks:
- Sword control
- Physical endurance
- Team coordination

This confirms those specific content checks.
It does not verify keyboard behaviour, visual contrast, or mobile layout.

The HTML download was a separate fetch using the URL returned by MCP,
not an additional Stitch tool call.

## 7. Design Handoff

MCP returned project information, desktop screen details,
and links to the screen's HTML and screenshot.

The fetched desktop HTML supplied additional design context.
The selected desktop and mobile designs were also reviewed manually
in Stitch, with screenshots saved as visual references.

Manual screenshots are supplementary context, not MCP tool calls.
The mobile design still requires testing in the implemented application.

## 8. Evidence

Selected design screenshots:
- evidence/stitch-before.png
- evidence/stitch-after-desktop.png
- evidence/stitch-after-mobile.png

Pending before submission:
Save a screenshot of a successful MCP tool call showing the tool name
and returned project or screen information, with credentials hidden.

## 9. What MCP Enabled

MCP allowed the coding agent to query Stitch directly for project
and screen information instead of relying only on manually pasted content.

The PRD remains the source of required application behaviour.
The retrieved design context guides appearance.
The POC and MVP checks must verify the implemented behaviour separately.