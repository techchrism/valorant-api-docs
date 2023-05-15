# Endpoint Responses

This directory contains example responses from the Valorant API. These are used to test the Zod types in `valorant-api-types`.
Any examples should be anonymized using [Valorant Data Anonymizer](https://valorant-data-anonymizer.techchrism.me/) before being committed to this repository.

If there is any data that Valorant Data Anonymizer does not properly anonymize, please open an issue on the [Valorant Data Anonymizer repository](https://github.com/techchrism/valorant-data-anonymizer).

This is just used for testing formatting and schemas so any UUIDS in the data may be invalid.

## Directory Layout

Anonymized responses are stored in individual directories per endpoint.
The directory name should match the "slug" version of the endpoint name, obtained from making the name lowercase and replacing spaces with dashes.
```javascript
name.toLowerCase().replace(/ /g, '-')
```