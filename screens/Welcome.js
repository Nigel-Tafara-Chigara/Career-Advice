import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

// Import styled components
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  SearchInput,
  AdviceText, // Add a new styled component for displaying advice
} from './../components/styles'; // Add the new styled component for the search input

const Welcome = ({ navigation }) => {
  // State to store the search query and the advice
  const [searchQuery, setSearchQuery] = useState('');
  const [advice, setAdvice] = useState('');

  // Function to handle search functionality
  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        // Make a GET request to the backend API to search for advice based on the program
        const response = await axios.get(`http://10.3.209.223:5000/search?query=${searchQuery}`);
        setAdvice(response.data.advice); // Set the returned advice
      } catch (error) {
        if (error.response) {
          // If program not found
          setAdvice(error.response.data.message);
        } else {
          // If there was an error with the request
          setAdvice('An error occurred. Please try again.');
        }
      }
    } else {
      alert("Please enter a program to search for.");
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/career image.jpg')} />

        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome!</PageTitle>
          <SubTitle welcome={true}>Career Guidance for you</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/career image.jpg')} />
            <Line />

            {/* New search input field */}
            <SearchInput
              placeholder="Search for a program..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)} // Update the search query as user types
            />
            <StyledButton onPress={handleSearch}>
              <ButtonText>Search</ButtonText>
            </StyledButton>

            <Line />

            {/* Display the advice if found */}
            {advice && <AdviceText>{advice}</AdviceText>}

            <StyledButton onPress={() => navigation.navigate("Home")}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
