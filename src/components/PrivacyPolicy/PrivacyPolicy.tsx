import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Block, Card, Container, Page, TopBar, Updated } from "./styles";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <Container>
        <TopBar>
          <Link to="/" aria-label="Back to home">
            ←
          </Link>
          <h1>Privacy policy</h1>
        </TopBar>

        <Updated>Last updated: October 2026</Updated>

        <Card>
          <Block>
            <h2>Your data stays on your phone</h2>
            <p>
              All registers, sales, products and expenses are stored in a
              database on this device. Keem Kar has no account system and does
              not upload your records anywhere.
            </p>
          </Block>

          <Block>
            <h2>What we collect</h2>
            <p>
              Nothing. The app does not collect analytics, location, contacts
              or any personal information.
            </p>
          </Block>

          <Block>
            <h2>Sharing</h2>
            <p>
              Statements and backups are only shared when you choose to share
              them, using your phone&apos;s share sheet. Once shared, the
              receiving app&apos;s privacy policy applies.
            </p>
          </Block>

          <Block>
            <h2>Backups</h2>
            <p>
              Backup files contain your business records in readable form.
              Store them somewhere you trust.
            </p>
          </Block>

          <Block>
            <h2>Security</h2>
            <p>
              You can turn on App lock to require your fingerprint, face or
              phone PIN to open the app. Uninstalling the app deletes all data
              on this device.
            </p>
          </Block>

          <Block>
            <h2>Changes</h2>
            <p>
              If future versions add optional online features, this policy will
              be updated and you will be asked before anything leaves your
              phone.
            </p>
          </Block>
        </Card>
      </Container>
      <Footer />
    </Page>
  );
}
