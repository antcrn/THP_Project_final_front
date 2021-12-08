import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Typography from '@mui/material/Typography';

export default function HowItWorks() {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot>
						<TouchAppIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '25px', px: 2 }}>
					<Typography variant="h6" component="span">
						Abonnez-vous
					</Typography>
					<Typography>Choisissez votre abonnement</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="primary">
						<AddShoppingCartIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '25px', px: 2 }}>
					<Typography variant="h6" component="span">
						Ajoutez vos jeux de société
					</Typography>
					<Typography>Ajoutez les jeux que vous emprunter à votre liste de jeux</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot >
						<LocalShippingIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '25px', px: 2 }}>
					<Typography variant="h6" component="span">
						Recevez vos jeux
					</Typography>
					<Typography>Chaque mois nous vous livrons votre sélection chez vous !</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}