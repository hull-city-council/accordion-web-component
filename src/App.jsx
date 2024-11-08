import * as React from 'react';
import {
  Accordion,
  Stack,
  Typography,
  Avatar,
  ListItemContent,
  Chip,
  List,
  ListItemButton,
  ListItem,
  ListItemDecorator,
  Divider
} from '@mui/joy';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PollIcon from '@mui/icons-material/Poll';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import dayjs from 'dayjs';
import { useBankHolidays } from "react-uk-bank-holidays";


export default function AccordionWebComponent() {
  const isLiveChatAvailable = () => {
    const now = dayjs();
    const dayOfWeek = now.day();
    const time = now.format('HH:mm');
    const { getLoader, getError, getBankHolidays } = useBankHolidays(now.year(), now.year() + 1, 'england-and-wales');

    if (getBankHolidays) {
      for (let bankHoliday of getBankHolidays) {
        if (bankHoliday.date === now.format('YYYY-MM-DD')) {
          return false;
        }
      }
    }

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return false; // Closed on weekends
    }

    if (dayOfWeek === 3) { // Wednesday
      return time >= '10:30' && time <= '16:30';
    }

    if ([1, 2, 4, 5].includes(dayOfWeek)) { // Monday, Tuesday, Thursday, Friday
      return time >= '09:00' && time <= '16:30';
    }

    return false;
  };
  return (
    <>
      <List sx={{ '--ListItemDecorator-size': '56px' }} aria-label="Ways to contact Hull City Council">
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <ListItemButton component="button" onClick={function () { ((e) => { window.ChatRedApi.open(); })(); return false; }} sx={{ "&:disabled": { backgroundColor: '#f5f5f5' } }} disabled={!isLiveChatAvailable()}>
            <ListItemDecorator>
              <Avatar color="danger">
                <ChatBubbleOutlineIcon />
              </Avatar>
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-lg" aria-hidden="true">
                Live chat {isLiveChatAvailable() ? <Chip color="primary" variant="outlined"> Recommended </Chip> : null}
              </Typography>
              <Typography level="body-sm" aria-hidden="true">
                {isLiveChatAvailable() ? 'Average 5 minute wait time' : 'Live chat is available Monday, Tuesday, Thursday and Friday 9am to 4.30pm and Wednesday 10.30am to 4.30pm. Closed on bank holidays.'}
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <ListItemButton component="a" href="https://www.hull.gov.uk/contact-service-1">
            <ListItemDecorator>
              <Avatar color="danger">
                <AlternateEmailIcon />
              </Avatar>
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md" aria-hidden="true">Contact a service</Typography>
              <Typography level="body-sm" aria-hidden="true">
                View our service categories
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <ListItemButton component="a" href="https://yoursay.hull.gov.uk/">
            <ListItemDecorator>
              <Avatar color="danger">
                <PollIcon />
              </Avatar>
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md" aria-hidden="true">Consultations and engagement</Typography>
              <Typography level="body-sm" aria-hidden="true">
                Provide feedback on proposals and contribute to the future of our city
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <ListItemButton component="a" href="https://www.hull.gov.uk/consultation-complaints-feedback">
            <ListItemDecorator>
              <Avatar color="danger">
                <QuestionAnswerIcon />
              </Avatar>
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md" aria-hidden="true">Complaints and feedback</Typography>
              <Typography level="body-sm" aria-hidden="true">
                Submit your feedback
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <Accordion sx={{ padding: 0, width: '100%' }}>
            <AccordionSummary>
              <Avatar color="danger">
                <LocalPhoneIcon />
              </Avatar>
              <ListItemContent>
                <Typography level="title-md" aria-hidden="true">Call us</Typography>
                <Typography level="body-sm" sx={{ fontWeight: 400 }} aria-hidden="true">
                  Expect longer wait times
                </Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2} sx={{ my: 2 }} >
                <Typography level="body-sm">Our call centre is available Monday, Tuesday, Thursday and Friday 9am to 4.30pm and Wednesday 10.30am to 4.30pm. Closed on bank holidays.</Typography>
                <a className="button" href="tel:01482300300" tabIndex={0}>Call 01482 300300</a>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem sx={{ borderBottom: '1px solid #636b7433', py: 2 }}>
          <ListItemButton component="a" href="https://hull.gov.uk/customer-services/customer-service-centres">
            <ListItemDecorator>
              <Avatar color="danger">
                <PlaceIcon />
              </Avatar>
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md" aria-hidden="true">Visit us</Typography>
              <Typography level="body-sm" aria-hidden="true">
                View our locations
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ py: 2 }}>
          <Accordion sx={{ padding: 0, width: '100%' }}>
            <AccordionSummary>
              <Avatar color="danger">
                <MailOutlineIcon />
              </Avatar>
              <ListItemContent>
                <Typography level="title-md" aria-hidden="true">Write to us</Typography>
                <Typography level="body-sm" sx={{ fontWeight: 400 }} aria-hidden="true">
                  View our postal address
                </Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2} sx={{ my: 2 }}>
                <Typography level="body-md">Our postal address</Typography>
                <Typography level="body-sm">Hull City Council <br /> The Guildhall  <br /> Alfred Gelder Street  <br /> Hull  <br /> HU1 2AA </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
    </>
  );
}