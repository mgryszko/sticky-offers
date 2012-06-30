package com.stickyoffers;

import com.google.inject.Singleton;

@Singleton
public class FakeOfferRepository implements OfferRepository {
    @Override
    public Offer claim(String token) {
        Offer offer = new Offer();
        offer.setCode("PROMO1");
        return offer;
    }
}
