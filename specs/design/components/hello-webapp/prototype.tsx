import type { ReactNode } from "react";
import {
  Alert, AppShell, Button, Detail, Field, Form, Heading, Screen, Section, Text,
  defineApp, useDisplayState, useNav, useValue,
} from "@wso2/prototype-kit";

interface Greeting { message: string }

const greeting: Greeting = { message: "Hello, World!" };

const user = { name: "Una Perera", email: "una@acme.example" };

function Shell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      id="shell"
      user={user}
      nav={[{ id: "nav.greeting", label: "Greeting", to: "screen.greeting" }]}
      account="screen.account"
      settings="screen.settings"
      signOut="screen.signed-out"
    >
      {children}
    </AppShell>
  );
}

function GreetingScreen() {
  const state = useDisplayState();
  const [data] = useValue<Greeting>("greeting");
  return (
    <Shell>
      <Heading id="heading.greeting" text="Greeting" />
      {state === "state.failed" ? (
        <Alert
          id="alert.greeting-failed"
          tone="error"
          title="Greeting unavailable"
          text="The greeting could not be loaded. Try again in a moment."
        />
      ) : (
        <Section id="section.greeting" title="Welcome">
          <Heading id="heading.message" level="section" text={data.message} />
        </Section>
      )}
    </Shell>
  );
}

function Account() {
  return (
    <Shell>
      <Heading id="heading.account" text="Account" />
      <Detail
        id="detail.account"
        fields={[
          { label: "Name", value: user.name },
          { label: "Email", value: user.email },
        ]}
      />
    </Shell>
  );
}

function Settings() {
  const navigate = useNav();
  return (
    <Shell>
      <Heading id="heading.settings" text="Settings" />
      <Form
        id="form.settings"
        onSubmit={() => navigate.go("screen.greeting")}
        actions={<Button id="btn.save-settings" label="Save settings" emphasis="primary" submit />}
      >
        <Field id="field.dark" label="Use dark mode" type="switch" defaultValue="off" />
      </Form>
    </Shell>
  );
}

function SignedOut() {
  return (
    <Screen>
      <Heading id="heading.signed-out" text="You are signed out" />
      <Text id="text.signed-out" text="Sign in again to see the greeting." />
      <Button id="btn.sign-in" label="Sign in" emphasis="primary" to="screen.greeting" />
    </Screen>
  );
}

export default defineApp({
  screens: {
    "screen.greeting": GreetingScreen,
    "screen.account": Account,
    "screen.settings": Settings,
    "screen.signed-out": SignedOut,
  },
  data: { greeting },
});
