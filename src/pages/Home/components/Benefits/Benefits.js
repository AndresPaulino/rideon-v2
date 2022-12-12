import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { Button, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { default as getWindowDimensions } from 'utils/getWindowDimensions';

const mockLeftGrid = [
  {
    image:
      'https://media.istockphoto.com/photos/roadside-assistance-is-on-their-way-picture-id1081876252?b=1&k=20&m=1081876252&s=170667a&w=0&h=quBtm_96HfbRxgT1Zs5GY5FDQytip0MqyIso3WNHdnU=',
    description: 'Call center, Towing Network, and Claims System',
    title: 'Roadside Assistance',
    href: '/product/roadside',
  },
  {
    image:
      'https://images.unsplash.com/photo-1618934116136-16d28f184b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZHNoaWVsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Explore our windshield protection',
    title: 'Windshield',
    href: '/product/windshield',
  },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/man-fixing-car-dent-by-himself-picture-id1360172540?b=1&k=20&m=1360172540&s=170667a&w=0&h=lp9YHCXd5SAsVVTg6R51XJrU1cNILYC0lVUNZHWXSlQ=',
  //   description: 'Explore our paintless dent repair',
  //   title: 'Paintless Dent Repair',
  //   href: '/product/dent',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Explore our appearance protection',
  //   title: 'Appearance Protection',
  //   href: '/product/appearance',
  // },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/balancing-car-money-and-purchase-deductible-picture-id1355687073?b=1&k=20&m=1355687073&s=170667a&w=0&h=fsINtANMdzYEi5-T6rEC-NcOeTNU0Yaa3TBkPCENaFQ=',
  //   description: 'Explore our deductible reimbursement plans',
  //   title: 'Deductible Reimbursement',
  //   href: '/product/deductible',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Explore our Rental Reimbursement',
  //   title: 'Rental Reimbursement',
  //   href: '/product/rental',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1648737967037-96967e9151b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Explore travel plan insurance options',
  //   title: 'Travel Plan',
  //   href: '/product/travel',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  //   description: 'Explore medical and car',
  //   title: 'Medical & Car',
  //   href: '/product/medicalandcar',
  // },
];

const mockMiddleGrid = [
  {
    image:
      'https://media.istockphoto.com/photos/car-tire-close-up-on-asphalt-road-at-sunset-picture-id1325611840?b=1&k=20&m=1325611840&s=170667a&w=0&h=UXzZDgjRZeyHfr6Lp3ZqN8BRKCqQksekvDU2mlNVWPY=',
    description: 'Expore tire and wheel',
    title: 'Tires',
    href: '/product/tireAndWheel',
  },
  {
    image:
      'https://images.unsplash.com/photo-1644503584825-91dfe48edca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG93dHJ1Y2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Explore our GAP program',
    title: 'GAP',
    href: '/product/gap',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFpbnRlbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   description: 'Explore our prepaid maintenance plans',
  //   title: 'Prepaid Maintenance',
  //   href: '/product/maintenance',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1602604953727-254e9efb7348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRoZWZ0JTIwcHJvdGVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Explore theft and total loss',
  //   title: 'Traceable Theft and Total Loss',
  //   href: '/product/theft',
  // },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/sun-going-down-at-the-rv-park-picture-id1329937355?b=1&k=20&m=1329937355&s=170667a&w=0&h=gg0qpFNQEQKVucaey8CIdPQZ7bWQ4s-0MLbeXLUEakg=',
  //   description: 'Explore RV technical assistance',
  //   title: 'RV Technical Assistance',
  //   href: '/product/rv',
  // },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/prescription-pills-on-prescription-rx-paper-picture-id1302483460?b=1&k=20&m=1302483460&s=170667a&w=0&h=ARSLqJw3y20SuSM9jWPctdT_HPOIr5UIsf1NI5XrJiQ=',
  //   description: 'Explore our Rx plans',
  //   title: 'Rx Plan',
  //   href: '/product/rxplan',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1448836990373-efa7c2fba22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGl0YW5pdW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  //   description: 'Explore our Titanium plan',
  //   title: 'Titanium Protection',
  //   href: '/product/titanium',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1622204861143-604843f106f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80',
  //   description: 'Explore benefits and fleet',
  //   title: 'Benefits & Fleet',
  //   href: '/product/benefitsandfleet',
  // },
];

const mockRightGrid = [
  {
    image:
      'https://media.istockphoto.com/photos/businessman-hold-virtual-medical-network-connection-icons-covid19-picture-id1312765142?b=1&k=20&m=1312765142&s=170667a&w=0&h=ma8qI_qiKbpNXLqKbQN1HKmSr1hfEn2dw6XyCB-nsSA=',
    description: 'Discover what our Telemedicine has to offer',
    title: 'Telemedicine',
    href: '/product/medical',
  },
  {
    image:
      'https://media.istockphoto.com/photos/new-driver-picture-id1303641956?b=1&k=20&m=1303641956&s=170667a&w=0&h=SJQZ809OzbdtaItlR2En55CBtnvxxJ7TVDVHRDsS2Ss=',
    description: 'Need a key replacement? We have you covered.',
    title: 'Key Replacements',
    href: '/product/keys',
  },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/old-leather-upholstery-leather-upholstery-lack-picture-id865366876?b=1&k=20&m=865366876&s=170667a&w=0&h=NzngJbc4kA9YUEqpOMEtGayuRRKFwm3k3vyejcq0uGM=',
  //   description: 'Explore lease wear and tear',
  //   title: 'Lease Wear & Tear',
  //   href: '/product/wear',
  // },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/businessman-trading-online-stock-market-on-teblet-screen-digital-picture-id1311598658?b=1&k=20&m=1311598658&s=170667a&w=0&h=Ln_dpeXRkCDCZjuqOe2r7AlWP29xHFbc9wyKzxajloA=',
  //   description: 'Discover Value Protect',
  //   title: 'Value Protect',
  //   href: '/product/value',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG93aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Join our Towbusters Motor Club',
  //   title: 'Towbusters Motor Club',
  //   href: '/product/towbusters',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdXJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   description: 'Look into our protection plans',
  //   title: 'Protection Plans',
  //   href: '/product/protection',
  // },
  // {
  //   image:
  //     'https://media.istockphoto.com/photos/maintenance-male-checking-and-removing-tire-valve-filling-nitrogen-picture-id1172069844?b=1&k=20&m=1172069844&s=170667a&w=0&h=rn1ziECBWpuzUQXwjwCQh00RyKabomSslgxl8QSj6fo=',
  //   description: 'Check out our nitro tires',
  //   title: 'Nitrogen Tires',
  //   href: '/product/nitrotires',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   description: 'Explore insurance and vendors',
  //   title: 'Insurance Agents & Vendors',
  //   href: '/product/insuranceandvendors',
  // },
];

const Column = ({ data }) => {
  const history = useNavigate();
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <ButtonBase key={i} sx={{ width: '100%' }}>
          <Box
            key={i}
            sx={{
              marginBottom: { xs: 2, sm: 3 },
              '&:last-child': { marginBottom: 0 },
              cursor: 'pointer',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          >
            <Box
              boxShadow={1}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                width: '100%',
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                  '& .portfolio-massonry__main-item': {
                    bottom: 0,
                  },
                },
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={item.image}
                alt="..."
                effect="blur"
                maxHeight={{ xs: 400, sm: 600, md: 1 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  height: 200,
                  width: '100%',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box
                position={'absolute'}
                bottom={'-100%'}
                left={0}
                right={0}
                padding={4}
                bgcolor={'background.paper'}
                className={'portfolio-massonry__main-item'}
                sx={{ transition: 'bottom 0.3s ease 0s' }}
              >
                <Box
                  component={'svg'}
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1920 100.1"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    transform: 'translateY(-90%)',
                    zIndex: 2,
                    width: 1,
                  }}
                >
                  <path
                    fill={theme.palette.background.paper}
                    d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                  ></path>
                </Box>
                <Typography>{item.description}</Typography>
                <Button
                  onClick={() => {
                    history(item.href ? item.href : '/tech');
                    window.scrollTo(0, 0);
                  }}
                >
                  View Details
                </Button>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
            </Box>
          </Box>
        </ButtonBase>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Main = () => {
  const theme = useTheme();
  const history = useNavigate();
  return (
    <Box
      textAlign={'center'}
      padding={{
        xs: 2,
        sm: 4,
      }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.blue[50] : colors.blue[900]
      }
      data-aos={'fade-up'}
    >
      <Typography
        marginBottom={'3rem'}
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        Featured Products
      </Typography>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Column data={mockLeftGrid} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Column data={mockMiddleGrid} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Column data={mockRightGrid} />
          </Grid>
        </Grid>
        <Box>
          <Button
            variant="text"
            onClick={() => {
              window.scrollTo(0, 0);
              history('/products-services');
            }}
            size={'large'}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
