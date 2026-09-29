import Buffer from './src/assets/bufferIcon.svg';
import Figma from './src/assets/figma.svg';
import Code from './src/assets/code.svg';
import Box from './src/assets/box.svg';
import Phone from './src/assets/phone.svg';
import Mail from './src/assets/mail.svg';
import Clock from './src/assets/clock.svg';
import Seo from './src/assets/seo.svg';
import Fast from './src/assets/fast.svg';

import GitHub from './src/assets/GithubLogo.svg';
import Forbes from './src/assets/ForbesLogo.svg';
import Google from './src/assets/GoogleLogo.svg';
import Microsoft from './src/assets/MicrosoftLogo.svg';
import Facebook from './src/assets/FacebookLogo.svg';

import HowWeWork from './src/assets/HowWeWork.png';
import TeamIllustration from './src/assets/TeamIllustration.png';

import Avatar1 from './src/assets/1.png';
import Avatar2 from './src/assets/2.png';
import Avatar3 from './src/assets/3.png';
import Avatar4 from './src/assets/Avatar4.png';
import Avatar5 from './src/assets/Avatar5.png';
import Avatar6 from './src/assets/Avatar6.png';
import Avatar7 from './src/assets/Avatar7.png';
import Avatar8 from './src/assets/Avatar8.png';
import Avatar9 from './src/assets/Avatar9.png';

import Cover1 from './src/assets/Cover1.png';
import Cover2 from './src/assets/Cover2.png';
import Cover3 from './src/assets/Cover3.png';
import Cover4 from './src/assets/Cover4.png';
import Cover5 from './src/assets/Cover5.png';
import Cover6 from './src/assets/Cover6.png';

import Forest from './src/assets/forest.webp';

import About1 from './src/assets/about1.jpg';
import About2 from './src/assets/about2.jpg';

import TeamAlbert from './src/assets/TeamAlbert.png';
import TeamDevon from './src/assets/TeamDevon.png';
import TeamDarrell from './src/assets/TeamDarrell.png';
import TeamMarvin from './src/assets/TeamMarvin.png';
import TeamFloyd from './src/assets/TeamFloyd.png';
import TeamAnnette from './src/assets/TeamAnnette.png';

import ChatIllustration from './src/assets/workflowChat.png';
import PlanningIllustration from './src/assets/workflowPlanning.png';
import ShipIllustration from './src/assets/workflowShip.png';

import UiDesign from './src/assets/uiDesign.png';
import Development from './src/assets/development.png';
import Maintenance from './src/assets/maintenance.png';

import IconCard from './src/assets/iconCard.svg';
import IconCursor from './src/assets/iconCursor.svg';
import IconMobile from './src/assets/iconMobile.svg';
import IconDesktop from './src/assets/iconDesktop.svg';
import IconWeb from './src/assets/iconWeb.svg';
import IconBackup from './src/assets/iconBackup.svg';
import IconUpgrade from './src/assets/iconUpgrade.svg';
import IconClean from './src/assets/iconClean.svg';
import IconFix from './src/assets/iconFix.svg';

export const Photos = {
    Icon: {
        Buffer,
        Figma,
        Code,
        Box,
        Phone,
        Mail,
        Clock,
        Seo,
        Fast,
        IconCard,
        fix: IconFix,
    } as Record<string, string>,

    SocNet: { GitHub, Forbes, Google, Microsoft, Facebook },
    Avatar: { Avatar1, Avatar2, Avatar3 },

    Services: {
        uiDesign: UiDesign,
        development: Development,
        maintenance: Maintenance,
    } as Record<string, string>,

    ServiceIcon: {
        card: IconCard,
        cursor: IconCursor,
        mobile: IconMobile,
        desktop: IconDesktop,
        web: IconWeb,
        backup: IconBackup,
        upgrade: IconUpgrade,
        clean: IconClean,
        fix: IconFix,

        Figma,
        Clock,
        Code,
        Seo,
        IconCard,
        Fast,
    } as Record<string, string>,

    Workflow: {
        chat: ChatIllustration,
        planning: PlanningIllustration,
        ship: ShipIllustration,
    } as Record<string, string>,

    BlogCover: {
        Cover1,
        Cover2,
        Cover3,
        Cover4,
        Cover5,
        Cover6,
        Forest,
    } as Record<string, string>,

    BlogAvatar: {
        Avatar4,
        Avatar5,
        Avatar6,
        Avatar7,
        Avatar8,
        Avatar9,
    } as Record<string, string>,

    About: {
        About1,
        About2,
    },

    HowWeWork,
    TeamIllustration,

    Team: {
        Albert: TeamAlbert,
        Devon: TeamDevon,
        Darrell: TeamDarrell,
        Marvin: TeamMarvin,
        Floyd: TeamFloyd,
        Annette: TeamAnnette,
    } as Record<string, string>,
};
