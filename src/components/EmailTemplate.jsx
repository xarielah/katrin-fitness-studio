import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function EmailTemplate(name, phoneNumber, message) {
  return (
    <Html style={{ direction: "rtl" }}>
      <Head />
      <Preview>הודעה חדשה התקבלה! מתעניינת {name}</Preview>
      <Body>
        <Tailwind>
          <Container className="my-5 w-full rounded-xl bg-white p-10 drop-shadow-lg">
            <Heading className="text-xl">התקבלה הודעה חדשה!</Heading>
            <Text>שם מלא: {name}</Text>
            <Text>
              מספר טלפון:&nbsp;
              <Link
                className="underline"
                href={`tel:${phoneNumber}`}
                target="_blank"
              >
                {phoneNumber}
              </Link>
            </Text>

            {message && (
              <Section>
                <Text>הודעה:</Text>
                <Text>{message}</Text>
              </Section>
            )}
            <Button
              href={`tel:${phoneNumber}`}
              className="w-full rounded-full bg-blue-300 py-2.5 text-center text-white"
            >
              לחצי כאן להתקשר
            </Button>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
