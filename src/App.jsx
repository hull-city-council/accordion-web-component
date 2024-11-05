import * as React from 'react';
import {
  AccordionGroup,
  Accordion,
  Stack,
  Typography,
  Avatar,
  ListItemContent,
  Chip,
  Button,
  ListItemButton,
  ListItem
} from '@mui/joy';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import dayjs from 'dayjs';
import { useBankHolidays } from "react-uk-bank-holidays";


export default function AccordionWebComponent() {
  const isLiveChatAvailable = () => {
    const now = dayjs();
    const dayOfWeek = now.day();
    const time = now.format('HH:mm');
    const {getLoader, getError, getBankHolidays} = useBankHolidays(now.year(), now.year() + 1, 'england-and-wales');

    if (getBankHolidays) {
      for(let bankHoliday of getBankHolidays) {
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

  const platforms = [
    {
      accounts: [
        {
          name: "myAccount",
          url: "https://account.hull.gov.uk",
        },
        {
          name: "Council tax",
          url: "https://www.hullcc.gov.uk/myrevsandbens/scripts/OPENPortal-Live.wsc/common/login.p",
        },
        {
          name: "Housing",
          url: "https://hullcc.engagehousing.app/",
        },
        {
          name: "School portal",
          url: "https://hull.cloud.servelec-synergy.com/Synergy/Live/SynergyWeb/",
        },
        {
          name: "Libraries",
          url: "https://hull.ent.sirsidynix.net.uk/client/en_GB/default/?#",
        },
        {
          name: "Job vacancies",
          url: "https://www.hullcc.gov.uk/jobs/Index.aspx",
        },
      ],
    },
  ];
  return (
    <>
    <AccordionGroup
    variant="plain"
    transition="0.2s"
    sx={{
      borderRadius: 'md',
      [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
        {
          paddingBlock: '1rem',
        },
      [`& .${accordionSummaryClasses.button}`]: {
        paddingBlock: '1rem',
      },
    }}
  >
    <Accordion expanded={isLiveChatAvailable()} disabled={!isLiveChatAvailable()}>
      <AccordionSummary>
        <Avatar color="danger">
          <ChatBubbleOutlineIcon />
        </Avatar>
        <ListItemContent>
       
          <Typography level="title-lg">
            Live chat  <Chip color="primary" variant="outlined"> Recommended </Chip>
            </Typography>
           
          <Typography level="body-sm">
          
            {isLiveChatAvailable() ? 'Average 5 minute wait time' : 'Live chat is available Monday, Tuesday, Thursday and Friday 9am to 4.30pm and Wednesday 10.30am to 4.30pm. Closed on bank holidays.'}
          </Typography>
          
        </ListItemContent>
       
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
        <Button color="danger" onClick={function(){((e) => {window.ChatRedApi.open(); })(); return false;}}>
          Open live chat
        </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary>
        <Avatar color="danger">
          <ChecklistIcon />
        </Avatar>
        <ListItemContent>
          <Typography level="title-md">Online forms</Typography>
          <Typography level="body-sm">
            Save time and complete one of our online forms
          </Typography>
        </ListItemContent>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
          {platforms[0].accounts.map((account, index) => (
              <ListItem component="a" href={account.url} key={index}>
                <ListItemButton>{account.name}</ListItemButton>
              </ListItem>
            ))}
        </Stack>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary>
        <Avatar color="danger">
          <LocalPhoneIcon />
        </Avatar>
        <ListItemContent>
          <Typography level="title-md">Call us</Typography>
          <Typography level="body-sm">
            Longer wait times
          </Typography>
        </ListItemContent>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
          <Button color="danger" component="a" href='tel:01482300300'>
            Call 01482 300300
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
    
    <Accordion>
      <AccordionSummary>
        <Avatar color="danger">
          <PlaceIcon />
        </Avatar>
        <ListItemContent>
          <Typography level="title-md">Visit us</Typography>
          <Typography level="body-sm">
            See us in person at one of our customer service centres
          </Typography>
        </ListItemContent>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
          <Button color="danger" component="a" href='https://hull.gov.uk/customer-services/customer-service-centres'>
            View our locations
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
        
    <Accordion>
      <AccordionSummary>
        <Avatar color="danger">
          <MailOutlineIcon />
        </Avatar>
        <ListItemContent>
          <Typography level="title-md">Write to us</Typography>
          <Typography level="body-sm">
            See our postal address
          </Typography>
        </ListItemContent>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1.5}>
         <p>Our postal address</p>
        </Stack>
      </AccordionDetails>
    </Accordion>
  </AccordionGroup>
  </>
  );
}
