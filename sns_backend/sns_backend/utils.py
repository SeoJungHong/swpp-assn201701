import calendar
import datetime

import pytz


def get_or_none(model, **kwargs):
    try:
        return model.objects.get(**kwargs)
    except model.DoesNotExist:
        return None


def utcnow():
    return datetime.datetime.utcnow().replace(tzinfo=pytz.utc)


def now_timestamp():
    return calendar.timegm(utcnow().utctimetuple())
