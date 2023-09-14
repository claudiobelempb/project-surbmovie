# project-surbmovie

## Diagramas de Classes
```mermaid
classDiagram
    class Movie{
      +Number movieId
      +String title
      +Number score
      +Number count
      +String url
    }
    class Sore{
      -Number value
    }
    class User{
      +Number userId
      +String email
    }

    Movie "n" -- "n" User
    Movie .. Sore
```
