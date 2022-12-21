import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Box, Divider, TextField, Typography } from '@mui/material';

const PlacesAutocomplete = ({ handleStartLocationChange, handleEndLocationChange, fieldLabel, fieldName }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);

      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        try {
          const { lat, lng } = getLatLng(results[0]);
          fieldLabel === 'Start Location'
            ? handleStartLocationChange(description, { lat, lng })
            : handleEndLocationChange(description, { lat, lng });
        } catch (error) {
          console.log('😱 Error: ', error);
        }
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Box
          onClick={handleSelect(suggestion)}
          key={place_id}
          sx={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          <Typography className='font-semibold'>{main_text}</Typography> <Typography>{secondary_text}</Typography>
          <Divider />
        </Box>
      );
    });

  return (
    <div ref={ref} className='map-search'>
      <TextField
        value={value}
        onChange={handleInput}
        disabled={!ready}
        name={fieldName}
        label={fieldLabel}
        fullWidth
        variant='outlined'
        margin='normal'
        className='map-input'
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && (
        <Box
          sx={{
            border: '1px solid #e0e0e0',
            padding: '0.5rem',
            borderRadius: '0.5rem',
          }}
          className='map-list'
        >
          {renderSuggestions()}
        </Box>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
