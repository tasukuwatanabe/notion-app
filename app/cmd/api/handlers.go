package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"example.com/notion-app/internal/models"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "up and running",
		Version: "1.0.0",
	}

	_ = app.writeJSON(w, http.StatusOK, payload)
}

func (app *application) Articles(w http.ResponseWriter, r *http.Request) {
	var articles []models.Article

	article1 := models.Article{
		ID:        1,
		Title:     "坊っちゃん",
		Body:      "私も十月もうそのお話方において事の後でもっありです。なお事実に束縛者もついにそのごろごろでしょだっかもをするのでならですでは満足ありたますて、ちょっととは始めでですたない。底があるで気もまあ当時にもちろんですないあり。",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	article2 := models.Article{
		ID:        2,
		Title:     "吾輩は猫である",
		Body:      "はなはだ嘉納さんで衰弱新まだ講演を失っない自分そのろ何か把持にですですて、この結果はそれかがた根性でして、木下君の訳と赤のあなたをぷんぷんお講義と思いてこれ世の中が実お話がありように正しく皆反抗がみあっだろて。",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	articles = append(articles, article1, article2)

	out, err := json.Marshal(articles)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}
